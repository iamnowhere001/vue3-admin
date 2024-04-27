
import { getDictInfo } from '@/api/dict'

export const getDictData = async (params) => {
  let retData = null
  try {
    // console.warn('getDictData params:', params)
    const res = await getDictInfo(params)
    if (res && res.children && res.children.length > 0) {
      retData = res.children
    }
  } catch (error) {
    console.error(error)
  }
  return retData
}

export const getDictLabel = (val, list) => {
  let label = ''
  if (val != null) {
    const obj = list.find(item => item.value == val)
    label = obj && obj.label ? obj.label : ''
  }
  return label
}
export const getSecondDictLabel = (val, list) => {
  let label = ''
  if (val != null) {
    list.forEach(item => {
      if (item.children) {
        item.children.forEach(item2 => {
          if (item2.value == val) {
            label = item2.label
          }
        })
      }
    })
  }
  return label
}
export const getThirdDictLabel = (val, list) => {
  let label = ''
  if (val != null) {
    list.forEach(item => {
      if (item.children) {
        item.children.forEach(item2 => {
          if (item2.children) {
            item2.children.forEach(item3 => {
              if (item3.value == val) {
                label = item3.label
              }
            })
          }
        })
      }
    })
  }
  return label
}

const dictMap = new Map()
const dict = async (type, isCache) => {
  let res = dictMap.get(type)
  if (res && isCache) {
    return new Promise(resolve => resolve(res))
  }
  let retData = null
  try {
    console.warn('getDictData type:', type)
    const res = await getDictInfo(type)
    if (res && res.children) {
      retData = res.children
    }
    if (isCache) {
      dictMap.set(type, retData)
    }
  } catch (error) {
    console.error(error)
  }
  return retData
}

export {
  dict
}