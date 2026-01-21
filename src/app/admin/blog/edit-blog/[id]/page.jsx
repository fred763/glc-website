// File: app\admin\blog\edit-blog\[id]\page.jsx
import WritePage from "../../../../../components/blogs/writePage";

export default function Page({params}){
  return(
    <WritePage blogId={params.id}/>
  )
}