// import { RouteComponentProps, withRouter, useHistory } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
// withRouter跨组件传递路由信息

interface MatchParams {
  touristRouterId: string
}
export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  console.log('props:', props)
  return (
    <>
      <h1>详情页面, 页面ID: {props.match.params.touristRouterId}</h1>
    </>
  )
}