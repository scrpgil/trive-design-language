---
title: Badge
description: .
url: /docs/badge
---

# Badge

バッジは、通常は別の要素の近くに表示されるインラインブロック要素です。通常、それらには数字または他の文字が含まれます。これらは、要素に関連付けられた追加のアイテムがあるという通知として使用でき、アイテムの数を示します。

## 例

<td-badge-page></td-badge-page>

## 利用方法

```typescript
<!-- Default -->
<td-badge>Badge</td-badge>

<!-- Colors -->
<td-badge color="main">Badge</td-badge>
<td-badge color="main-black">Badge</td-badge>
<td-badge color="sub-black">Badge</td-badge>
<td-badge color="bg">Badge</td-badge>
<td-badge color="light">Badge</td-badge>
<td-badge color="border">Badge</td-badge>
```




## プロパティ

| Property          | Attribute          | Description                                                                                                                                                                                                                                                                               | Type                                                        | Default     |
| ----------------- | ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------- |
| `color`           | `color`            | カラーパレットから使用する色: `"main"`, `"main-black"`, `"sub-black"`, `"bg"`, `"light"`, `"border"`。 その他の色については [styleguide](/docs/styleguide)を参照してください。                   | `string \| undefined`                                       | `undefined` |
