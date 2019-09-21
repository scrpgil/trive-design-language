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
| `buttonType`      | `button-type`      | The type of button.                                                                                                                                                                                                                                                                       | `string`                                                    | `'button'`  |
| `color`           | `color`            | The color to use from your application's color palette. Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`. For more information on colors, see [theming](/docs/theming/basics).                    | `string \| undefined`                                       | `undefined` |
| `disabled`        | `disabled`         | If `true`, the user cannot interact with the button.                                                                                                                                                                                                                                      | `boolean`                                                   | `false`     |
| `download`        | `download`         | This attribute instructs browsers to download a URL instead of navigating to it, so the user will be prompted to save it as a local file. If the attribute has a value, it is used as the pre-filled file name in the Save prompt (the user can still change the file name if they want). | `string \| undefined`                                       | `undefined` |
| `expand`          | `expand`           | Set to `"block"` for a full-width button or to `"full"` for a full-width button without left and right borders.                                                                                                                                                                           | `"block" \| "full" \| undefined`                            | `undefined` |
| `fill`            | `fill`             | Set to `"clear"` for a transparent button, to `"outline"` for a transparent button with a border, or to `"solid"`. The default style is `"solid"` except inside of a toolbar, where the default is `"clear"`.                                                                             | `"clear" \| "default" \| "outline" \| "solid" \| undefined` | `undefined` |
| `href`            | `href`             | Contains a URL or a URL fragment that the hyperlink points to. If this property is set, an anchor tag will be rendered.                                                                                                                                                                   | `string \| undefined`                                       | `undefined` |
| `mode`            | `mode`             | The mode determines which platform styles to use.                                                                                                                                                                                                                                         | `"ios" \| "md"`                                             | `undefined` |
| `rel`             | `rel`              | Specifies the relationship of the target object to the link object. The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).                                                                                                    | `string \| undefined`                                       | `undefined` |
| `routerDirection` | `router-direction` | When using a router, it specifies the transition direction when navigating to another page using `href`.                                                                                                                                                                                  | `"back" \| "forward" \| "root"`                             | `'forward'` |
| `shape`           | `shape`            | The button shape.                                                                                                                                                                                                                                                                         | `"round" \| undefined`                                      | `undefined` |
| `size`            | `size`             | The button size.                                                                                                                                                                                                                                                                          | `"default" \| "large" \| "small" \| undefined`              | `undefined` |
| `strong`          | `strong`           | If `true`, activates a button with a heavier font weight.                                                                                                                                                                                                                                 | `boolean`                                                   | `false`     |
| `target`          | `target`           | Specifies where to display the linked URL. Only applies when an `href` is provided. Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.                                                                                                                                       | `string \| undefined`                                       | `undefined` |
| `type`            | `type`             | The type of the button.                                                                                                                                                                                                                                                                   | `"button" \| "reset" \| "submit"`                           | `'button'`  |
