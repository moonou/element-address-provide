import pca from 'china-division/dist/pca.json'

const covert = (data) => {
  let arr = []
  if (data instanceof Object) {
    for (let key in data) {
      let children
      if (data[key]) {
        children = covert(data[key])
      }
      arr.push({
        value: key,
        label: key,
        children
      })
    }
  }

  if (data instanceof Array) {
    arr = data.map((item) => {
      return {
        value: item,
        label: item
      }
    })
  }

  return arr
}

export default {
  name: 'ElementAddressProvide',
  render (h) {
    let datas = covert(pca)

    this.$slots.default[0].componentOptions.propsData.options = datas
    return this.$slots.default[0]
  }
}
