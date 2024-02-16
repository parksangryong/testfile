import { useQueryClient, useMutation, useQuery } from 'react-query';
import { postData, putData, deleteData, fetchData } from './api';
import { Alert } from 'react-native';
import { useApiCount } from './zustand';

export const useHomeQuery = () => {
  const { plusCount } = useApiCount();

  return useQuery({
    queryKey: 'rqData',
    queryFn: fetchData,
    onSuccess: data => plusCount(data.length),
  });
};

export const usePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postData,
    onSuccess: () => {
      console.log('post 요청 성공');
      queryClient.invalidateQueries('rqData');
    },
    onError: () => {
      Alert.alert('에러 발생');
    },
    onSettled: () => {
      console.log('post 결과에 관계 없이 무언가 실행됨');
    },
  });
};

export const usePutMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: putData,
    onSuccess: () => {
      console.log('put 요청 성공');
      queryClient.invalidateQueries('rqData');
    },
    onError: () => {
      Alert.alert('에러 발생');
    },
    onSettled: () => {
      console.log('put 결과에 관계 없이 무언가 실행됨');
    },
  });
};

export const useDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteData,
    onSuccess: () => {
      console.log('delete 요청 성공');
      queryClient.invalidateQueries('rqData');
    },
    onError: () => {
      Alert.alert('에러 발생');
    },
    onSettled: () => {
      console.log('delete 결과에 관계 없이 무언가 실행됨');
    },
  });
};
