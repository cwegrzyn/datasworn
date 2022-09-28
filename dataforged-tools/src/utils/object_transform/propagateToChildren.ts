import _ from 'lodash-es'

/**
 * Propagates an object to child objects; each child receives the propagated object, but if it has any specified properties for that object, they take precedence.
 * @param objToPropagate - The object that will be merged into the children.
 * @param key - The key of the object to propagate.
 * @param children - The array of children to propagate the object to.
 */
export function propagateToChildren<C, T extends C[keyof C] & object> (objToPropagate: T, key: keyof C, ...children: C[]): void {
  children.forEach(child => {
    if (!child[key]) {
      child[key] = {} as T
    }
    child[key] = _.merge(objToPropagate, child[key])
  })
}
