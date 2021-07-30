export default {
  formatTime(time) {
    const minutes = Math.floor(time / 60) || 0;
    const seconds = Math.round(time - minutes * 60 || 0);

    // return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    return `${minutes}:${String(seconds).padStart(2, "0")}`;
  }
};
