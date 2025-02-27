import BasicLayout from "../layouts/BasicLayout";

const Mainpage = () => {
    return (

        <BasicLayout>
            <div className="text-3xl">Main Page</div>
        </BasicLayout>
    );
}

export default Mainpage;
// 기본적인 틀은 function 이게 컴포넌트  props로 파라메타 전달 스태이트로 화면 렌더링 데이터 추가
// 이벤트 추가 , 커스텀 훅 추가 등 