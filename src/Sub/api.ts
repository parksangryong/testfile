import axios from 'axios';

export const fetchData = async () => {
  const response = await axios.get('http://192.168.0.88:3005/');
  return response.data;
};

export const postData = async ({ name, age, endPoint }: any) => {
  console.log(endPoint);
  const object = { name: name, age: age };
  const response = await axios.post('http://192.168.0.88:3005/', object);
  return response.data;
};

export const putData = async ({ id, name, age }: any) => {
  console.log(id, name, age);
  const response = await axios.put(`http://192.168.0.88:3005/${id}`, {
    name: name,
    age: age,
  });
  return response.data;
};

export const deleteData = async ({ id }: any) => {
  console.log(id);
  const response = await axios.delete(`http://192.168.0.88:3005/${id}`);
  return response.data;
};
