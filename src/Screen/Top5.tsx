import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, Platform } from 'react-native';
// import RNFetchBlob from 'rn-fetch-blob';
import * as Progress from 'react-native-progress';
import RNFS from 'react-native-fs';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';

const Top5 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [isLoading2, setIsLoading2] = useState(false);

  const downloadFile = async () => {
    const fileUrl = 'https://check.hkcd.kr/pdf.pdf'; // 다운로드할 파일의 URL
    const fileName = 'long.pdf'; // 저장될 파일의 이름
    setIsLoading(true);

    let path =
      Platform.OS === 'ios'
        ? `${RNFS.DocumentDirectoryPath}/${fileName}`
        : `${RNFS.DownloadDirectoryPath}/${fileName}`;

    const options = {
      fromUrl: fileUrl,
      toFile: path,
      begin: (res: any) => {
        console.log(res);
      },
      progress: (res: { bytesWritten: number; contentLength: number }) => {
        let currentProgress = res.bytesWritten / res.contentLength;
        if (currentProgress - progress >= 0.1) {
          setProgress(currentProgress);
        }
      },
    };

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const result = await RNFS.downloadFile(options).promise;
      console.log('파일 다운로드 성공:', path);
      setIsLoading(false);
      setProgress(0); // 다운로드가 완료되면 프로그레스를 리셋합니다.
      return path;
    } catch (error) {
      console.error('파일 다운로드 실패:', error);
      setIsLoading(false);
      setProgress(0);
      return null;
    }
  };

  const uploadFile = async () => {
    try {
      const file = await selectFile();

      await uploadData(file);
    } catch (error) {
      console.error('Error during file selection or upload:', error);
    }
  };

  const uploadData = async (file: any) => {
    const url = 'http://192.168.0.88:3005/up';
    const formData = {
      uri: file[0].uri + '',
      name: file[0].name,
      type: file[0].type,
    };
    setIsLoading2(true);

    const config = {
      onUploadProgress: (progressEvent: { loaded: number; total: number }) => {
        let currentProgress = progressEvent.loaded / progressEvent.total;
        if (currentProgress - progress2 >= 0.1) {
          setProgress2(currentProgress);
          console.log(currentProgress);
        }
      },
    };

    try {
      const response = await axios.post(url, formData, config);
      console.log('업로드 성공:', response.data);
      setIsLoading2(false);
      setProgress2(0); // 다운로드가 완료되면 프로그레스를 리셋합니다.
    } catch (error) {
      console.error('업로드 실패!:', error);
      setIsLoading2(false);
      setProgress2(0); // 다운로드가 완료되면 프로그레스를 리셋합니다.
    }
  };

  const selectFile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles], // 여러 유형을 지정할 수 있습니다.
      });

      // 선택된 파일 정보 반환
      console.log(result);
      return result;
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        throw err;
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.bbox}>
          <Button title="Download file" onPress={downloadFile} />
          {isLoading && (
            <View style={styles.probox}>
              <Progress.Bar progress={progress} width={200} height={10} />
              <Text>Download File... </Text>
            </View>
          )}
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.bbox}>
          <Button title="Upload file" onPress={uploadFile} />
          {isLoading2 && (
            <View style={styles.probox}>
              <Progress.Bar progress={progress2} width={200} height={10} />
              <Text>Upload File... </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bbox: {
    width: 300,
    height: 80,
  },
  probox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Top5;
