# Introduction

[![npm](https://img.shields.io/npm/v/element-address-provide.svg?style=for-the-badge)](https://www.npmjs.com/package/element-address-provide)

Provide address data to ElementUI Cascader component. datasource from [Administrative-divisions-of-China](https://github.com/modood/Administrative-divisions-of-China)

# Usage

## Install

`npm install --save element-address-provide`

or

`yarn add element-address-provide`

## Vue Component

``` html
<template>
  <provide>
    <cascader></cascader>
  </provide>
</template>

<script>
import Provide from 'element-address-provide'
import Cascader from 'element-ui/lib/cascader'

export default {
  components: {
    Provide,
    Cascader
  }
}
</script>
```
