import { unwrapResult } from "@reduxjs/toolkit";

// in the component
// const onClick = () => {
//   dispatch(fetchUserById(userId))
//     .then(unwrapResult)
//     .then((response) => {
//       return dispatch(fetchUsersPost(response.usePosts));
//     })
//     .then(unwrapResult)
//     .then((responseUserPosts) => {
//       console.log("check here")
//     })
//     .catch((rejectedValueOrSerializedError) => {
//       // handle result here
//     });
// };
