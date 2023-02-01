import Button from './Button.jsx'
export default function Index() {
    return(
        <div css={{width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', borderTop: '25px solid var(--green)', borderBottom: '25px solid var(--green)'}}>
            <div css={{marginTop:'40px', marginLeft:'85px'}}>
                <img alt="subway_logo_green" src="src\assets\logo_green.svg"></img>
            </div>
            <div css={{marginTop: '40px'}}>
                <img css={{width: '100%'}} alt="banner" src="src\assets\banner.svg"></img>
            </div>
            <div css={{margin:'0 auto' ,marginTop: '60px', display: 'flex'}}>
                <Button title='매장에서 식사'></Button>
                <Button title='포장하기'></Button>
            </div>
        </div>
    );
}
