import React from "react";
import Bottombar from "./Bottombar";
import PostReview from "./PostReview";

function Posts() {
  return (
    <div>
      {items.map((item, index) => {
        return <PostReview key={index} {...item} />;
      })}
      <Bottombar name={"events"} />
    </div>
  );
}
const items = [
  {
    like: "red",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4D03AQGyRkCnmrFuWA/profile-displayphoto-shrink_800_800/0/1640534470609?e=1651104000&v=beta&t=mGlTgM3PVc82BcS1unAK1bv1bK65fsuhLyRdbgWgr0g",
    src: "https://cdn.theculturetrip.com/wp-content/uploads/2021/07/great-pyramid.jpg",
    description: "I can't imagine how the old egyptain could do it.",
    date: "September 12",
  },
  {
    like: "red",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4D03AQGyRkCnmrFuWA/profile-displayphoto-shrink_800_800/0/1640534470609?e=1651104000&v=beta&t=mGlTgM3PVc82BcS1unAK1bv1bK65fsuhLyRdbgWgr0g",
    src: "https://cdn.theculturetrip.com/wp-content/uploads/2021/07/great-pyramid.jpg",
    description: "I can't imagine how the old egyptain could do it.",
    date: "September 12",
  },
  {
    like: "red",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4D03AQGyRkCnmrFuWA/profile-displayphoto-shrink_800_800/0/1640534470609?e=1651104000&v=beta&t=mGlTgM3PVc82BcS1unAK1bv1bK65fsuhLyRdbgWgr0g",
    src: "https://cdn.theculturetrip.com/wp-content/uploads/2021/07/great-pyramid.jpg",
    description: "I can't imagine how the old egyptain could do it.",
    date: "September 12",
  },

  {
    like: "red",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4D03AQGyRkCnmrFuWA/profile-displayphoto-shrink_800_800/0/1640534470609?e=1651104000&v=beta&t=mGlTgM3PVc82BcS1unAK1bv1bK65fsuhLyRdbgWgr0g",
    src: "https://cdn.theculturetrip.com/wp-content/uploads/2021/07/great-pyramid.jpg",
    description: "I can't imagine how the old egyptain could do it.",
    date: "September 12",
  },
  {
    like: "red",
    avatar:
      "https://media-exp1.licdn.com/dms/image/C4D03AQGyRkCnmrFuWA/profile-displayphoto-shrink_800_800/0/1640534470609?e=1651104000&v=beta&t=mGlTgM3PVc82BcS1unAK1bv1bK65fsuhLyRdbgWgr0g",
    src: "https://cdn.theculturetrip.com/wp-content/uploads/2021/07/great-pyramid.jpg",
    description: "I can't imagine how the old egyptain could do it.",
    date: "September 12",
  },
];
export default Posts;
