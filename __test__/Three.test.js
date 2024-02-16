import React from 'react';
import 'react-native';
import { render, screen } from '@testing-library/react-native';
import { Test6 } from '../src/Screen/Test6'; //컴포넌트 예시

describe('Test3', () => {
  it('Home 화면이 정상적으로 렌더링 되는가?', () => {
    // 목적과 콜백함수 (테스트)
    const screens = render(<Test6 />);
    const json = screens.toJSON(); // 렌더링 된 컴포넌트를 json 구조로 변환한다.
    expect(json).toMatchSnapshot(); // 만들어진 json으로 스냅샷을 촬영한다.
  });
  it('title이 존재하는가?', () => {
    render(<Test6 />);
    const leng = screen.getAllByText('Title');
    expect(leng.length).toEqual(1);
  });
  it('text가 존재하는가?', () => {
    render(<Test6 />);
    const leng = screen.getAllByText('Text');
    expect(leng.length).toEqual(1);
  });
}); // 대 주제 생성
