const roomListState = [
    {
      roomId: 1,
      roomName: "평범 객실",
      sellPrc: "100,000",
      maxCount: 10,
    },
    {
      roomId: 2,
      roomName: "좋은 객실",
      sellPrc: "200,000",
      maxCount: 1,
    },
    {
      roomId: 3,
      roomName: "가족 객실",
      sellPrc: "400,000",
      maxCount: 1,
    },
    {
      roomId: 4,
      roomName: "멍멍이 동반 객실",
      sellPrc: "800,000",
      maxCount: 1,
    },
    {
      roomId: 5,
      roomName: "쾌적한 객실",
      sellPrc: "1,600,000",
      maxCount: 1,
    },
  ];

  const reservationListState = [
    {
      id: 1,
      createDate: 20231210,
      bookNm: "라마다 디럭스",
      client: "말티즈",
      checkIn: 20231224,
      checkOut: 20231225,
      payMethod: "카드결제",
      price: "100,000",
      status: "예약완료",
    },
    {
      id: 2,
      createDate: 20231210,
      bookNm: "웨스틴조선 이그제큐티브",
      client: "요크셔테리어",
      checkIn: 20231224,
      checkOut: 20231225,
      payMethod: "카드결제",
      price: "200,000",
      status: "결제완료",
    },
    {
      id: 3,
      createDate: 20231210,
      bookNm: "노보텔 이그제큐티브",
      client: "시츄",
      checkIn: 20231224,
      checkOut: 20231225,
      payMethod: "카드결제",
      price: "400,000",
      status: "예약완료",
    },
    {
      id: 4,
      createDate: 20231210,
      bookNm: "워커힐 리버뷰",
      client: "포메라니안",
      checkIn: 20231224,
      checkOut: 20231225,
      payMethod: "카드결제",
      price: "800,000",
      status: "결제완료",
    },
    {
      id: 5,
      createDate: 20231210,
      bookNm: "신라 스위트",
      client: "푸들",
      checkIn: 20231224,
      checkOut: 20231225,
      payMethod: "카드결제",
      price: "1,600,000",
      status: "결제완료",
    },
  ];

  const reviewListState = [
    {
      reviewId: 1,
      roomName: "평범 객실",
      writer: "말티즈",
      title: "가성비 짱",
    },
    {
      reviewId: 2,
      roomName: "좋은 객실",
      writer: "요크셔테리어",
      title: "바퀴벌레 나옴",
    },
    {
      reviewId: 3,
      roomName: "가족 객실",
      writer: "시츄",
      title: "가격대비 별루",
    },
    {
      reviewId: 4,
      roomName: "멍멍이 동반 객실",
      writer: "포메라니안",
      title: "번화가 주변",
    },
    {
      reviewId: 5,
      roomName: "쾌적한 객실",
      writer: "푸들",
      title: "그저 그럼",
    },
  ];
  
  export { roomListState, reservationListState, reviewListState };
  