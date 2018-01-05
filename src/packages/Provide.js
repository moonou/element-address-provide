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

  return arr.length === 0 ? undefined : arr
}

export default {
  name: 'ElementAddressProvide',
  render (h) {
    if (!this.$slots.default) {
      console.warn('🌝 this component must have one children component')
      return
    }
    const vnode = this.$slots.default[0]

    if (vnode.componentOptions && vnode.componentOptions.tag.toLowerCase().indexOf('cascader') !== -1) {
      vnode.componentOptions.propsData.options = covert(pca)
    } else {
      console.warn('🙈 sorry, this component just support wrap Cascader component')
    }

    return vnode
  }
}
