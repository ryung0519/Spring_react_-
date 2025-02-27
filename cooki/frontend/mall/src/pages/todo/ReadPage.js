import { useCallback } from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

const ReadPage = () => {
    const { tno } = useParams()

    const navigate = useNavigate()

    const [queryParams] = useSearchParams()

    const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
    const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

    const queryStr = createSearchParams({ page, size }).toString()

    // 변화를 감지하는 것이 필요,     --- functoin , [요 안에 변화를 감지할 객체]
    const moveToModify = useCallback((tno) => {
        navigate({ pathname: '/todo/modify/&{tno}', search: queryStr })
    }, [tno, page, size])

    const moveToList = useCallback(()=>{
        navigate({pathname:'/todo/list',search:queryStr})
    },[page, size])

    return (
        <div className="text-3xl font-extrabold">
            Todo Read Page Component {tno}
            <div>
                <button onClick={() => moveToModify(33)}>Test Modify</button>
                <button onClick={() => moveToModify(33)}>Test List</button>
            </div>
        </div>

    );
}
export default ReadPage;