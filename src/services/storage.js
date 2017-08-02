const storage = {
  setItem(key, value) {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  },
  getItem(key) {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
  }
};

export default storage;
