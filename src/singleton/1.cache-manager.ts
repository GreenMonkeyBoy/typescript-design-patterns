class CacheManager {
  private static instance: CacheManager

  private data: Map<string, string> = new Map()

  private constructor() {}

  static getInstance(): CacheManager {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager()
    }

    return CacheManager.instance
  }

  setData(key: string, data: string) {
    this.data.set(key, data)
  }

  getData(key: string) {
    return this.data.get(key)
  }
}

//---------- Client Code ------------//

function clientCode() {
  const instanceA = CacheManager.getInstance()
  console.log(`InstanceA: sets the value 'Adam' in the key 'user'`)
  instanceA.setData("user", "Adam")

  const instanceB = CacheManager.getInstance()
  console.log(
    `InstanceB: the value of key 'user' is '${instanceB.getData("user")}'`,
  )
}

/**
 * Example usage and output:
 *
 * InstanceA: sets the value 'Adam' in the key 'user'
 * InstanceB: the value of key 'user' is 'Adam'
 */
clientCode()

export {}
