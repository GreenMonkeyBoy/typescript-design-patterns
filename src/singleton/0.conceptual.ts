/**
 * The Singleton class ensures that only one instance of the class is created.
 * This is achieved by providing a static method that returns the instance,
 * and by making the constructor private to prevent direct instantiation.
 */
class Singleton {
  // A private static instance property to hold the singleton instance of the class
  private static instance: Singleton

  // Private constructor to prevent direct instantiation from outside the class
  private constructor() {}

  /**
   * Static method to control access to the singleton instance.
   * If the instance doesn't exist, it creates one (lazy initialization).
   * @returns The singleton instance of the class.
   */
  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }
}

//---------- Client Code ------------//

function clientCode() {
  const s1 = Singleton.getInstance()
  const s2 = Singleton.getInstance()

  if (s1 === s2) {
    console.log(`The variables 's1' and 's2' contains the same instance.`)
  }
}

/**
 * Example usage and output:
 *
 * The variables 's1' and 's2' contains the same instance.
 */
clientCode()
