# 토이 프로젝트 - 영화 검색 사이트 (와챠 피디아)

<br/>

## 1. 프로젝트 소개

> 개요 : 토이 프로젝트 - 영화 검색 사이트
>
> 주제 : 와챠 피디아 클론 코딩
>
> 기간 : 2022.07.15 ~ 2022.08.08

<br/>

## 2. 프로젝트 요약

### 2.1. 프로젝트 요약

![https://img.shields.io/badge/Laguage-Typescript-red](https://img.shields.io/badge/Laguage-Typescript-green?logo=Typescript&logoColor=#377549) ![React_query](https://img.shields.io/badge/Libarary-React_Query-green?logo=reactquery&logoColor=#377549)

- 📌본 토이프로젝트는 영화 검색을 하고자하는 사용자가 영화 및 TV 프로그램을 검색 요청하는 서비스이다.

![프로젝트 요약](https://github.com/ohtaekwon/ohtaekwon/blob/master/img/WATCHA.png?raw=true)

### 2.2. 사용된 라이브러리

### slick - 슬라이드

```shell
npm i react-slick
```

```shell
npm i @types/react-slick -D
```

### react-query

```shell
npm i react-query
```

```shell

```

### mui - 아이콘

```shell
npm i @mui/material
```

## 이슈

### 1) slick 적용 오류

```shell
npm i slick-carousel
```

설치 후,

```tsx
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
```

- 위의 css를 import한다.

## 3. 리팩토링 계획

- [바로가기](https://github.com/ohtaekwon/Refactoring-Typescript-watcha)

> 기간 : 08.08 ~ 진행중

### 3.1. 공통 컴포넌트 리팩토링

- MOVIE / TV 에서 사용하는 Detail page를 공통적으로 사용할 수 있도록 구현 계획

### 3.2. 라우터 리팩토링

- 라우터 폴더로 만들어서 구분

### 3.3. 레이아웃 반응형 고려한 리팩토링

### 3.4. 슬라이더 컴포넌트 라이브러리 사용이 아닌, 직접 구현

- slick 라이브러리에서 직접 구현 해보기

### 3.5. 통신 모듈 리팩토링
