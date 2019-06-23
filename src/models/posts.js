async function get(id) {
  if (id != null) {
    return await fetch(`https://nebula-aluben.firebaseio.com/posts/${id}.json?print=pretty`);
  }
}

async function getAll() {
  return await fetch(`https://nebula-aluben.firebaseio.com/posts.json?print=pretty`);
}

export {
  get,
  getAll,
}