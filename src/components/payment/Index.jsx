import Button from './Button.jsx';

export default function Index() {
  return (
    <div
      css={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div css={{ display: 'flex' }}>
        <Button>신용 카드</Button>
        <Button>
          간편 결제
          <br />
          모바일 페이, 앱결제 등
        </Button>
        <Button>기프티콘, 모바일 쿠폰</Button>
      </div>
      <div
        css={{
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '24px',
          alignItems: 'center',
          textAlign: 'center',
          color: 'rgba(29, 28, 33, 0.8)',
          marginTop: '50px',
        }}
      >
        *현금 결제는 카운터를 이용해주세요
      </div>
    </div>
  );
}
