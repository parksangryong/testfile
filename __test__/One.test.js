import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';
import { Test5 } from '../src/Screen/Test5'; //컴포넌트 예시

describe('Test1', () => {
  it('Home 화면이 정상적으로 렌더링 되는가?', () => {
    render(<Test5 />);
  });
  it('bbbb', () => {
    const y = 10;
    expect(y).toBe(10);
  });
}); // 대 주제 생성
