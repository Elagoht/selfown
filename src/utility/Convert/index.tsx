class Convert {
  static bytesToMB(bytes: number) {
    return `${(bytes / 1024).toFixed(2)} MB`
  }

  static bytesToGB(bytes: number) {
    return `${(bytes / 1024 / 1024).toFixed(2)} GB`
  }
}

export default Convert