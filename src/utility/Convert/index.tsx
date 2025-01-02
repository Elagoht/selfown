class Convert {
  static bytesToMB(bytes: number) {
    return (bytes / 1024).toFixed(2)
  }

  static bytesToGB(bytes: number) {
    return (bytes / 1024 / 1024).toFixed(2)
  }
}

export default Convert