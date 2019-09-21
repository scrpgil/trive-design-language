---
title: Button
description: .
url: /docs/button
---

# td-button

ボタンはクリック可能な要素を提供します。クリック可能な要素は、フォーム、またはシンプルで標準的なボタン機能を必要とするあらゆる場所で使用できます。テキスト、アイコン、またはその両方を表示できます。ボタンをいくつかの属性でスタイル設定して、特定の方法に見せることができます。

## 例

<div class="components">
    <td-button color="main">Buttton</td-button>
    <td-button color="main-black">Buttton</td-button>
    <td-button color="sub-black">Buttton</td-button>
    <td-button color="bg">Buttton</td-button>
    <td-button color="light">Buttton</td-button>
    <td-button color="border">Buttton</td-button>
</div>

## 利用方法

```typescript
<!-- Default -->
<td-button>Buttton</td-button>

<!-- Colors -->
<td-button color="main">Buttton</td-button>
<td-button color="main-black">Buttton</td-button>
<td-button color="sub-black">Buttton</td-button>
<td-button color="bg">Buttton</td-button>
<td-button color="light">Buttton</td-button>
<td-button color="border">Buttton</td-button>
```




## プロパティ

| Property          | Attribute          | Description                                                                                                                                                                                                                                                                               | Type                                                        | Default     |
| ----------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------- |
| `color`           | `color`            | カラーパレットから使用する色: `"main"`, `"main-black"`, `"sub-black"`, `"bg"`, `"light"`, `"border"`。 その他の色については [styleguide](/docs/styleguide)を参照してください。                   | `string \| undefined`                                       | `undefined` |
