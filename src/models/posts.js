import { firebase } from './';

async function get(id) {
  if (id != null) {
    return await fetch(`https://nebula-aluben.firebaseio.com/posts/${id}.json?print=pretty`);
  }
}

async function getAll() {
  return await fetch(`https://nebula-aluben.firebaseio.com/posts.json?print=pretty`);
}

async function getChannelPost(channelId, postId) {
  const result = await firebase.firestore()
    .collection("channels").doc(channelId)
    .collection("posts").doc(postId)
    .get();
  return result.data();
}

export {
  get,
  getAll,
  getChannelPost,
}