trconvert [![NPM version](https://badge.fury.io/js/trconvert.svg)](http://badge.fury.io/js/trconvert) [![Circle CI](https://circleci.com/gh/atsumo/trconvert.svg?style=svg)](https://circleci.com/gh/atsumo/trconvert)
=================

Toolkit for CreateJSでパブリッシュしたアニメーション実行ファイルのRatioを変換するコマンドラインツールです。
パブリッシュ後のCanvas操作の座標を任意の倍率に静的に処理するようになっています。node.jsで動きます。

### install
nodeで動くのでnodeのインストールが必要です。


```
npm install -g trconvert
```


### 使い方
```
$ trconvert <file> [options]
  Usage: tfconvert <file> [options]

  Options:

    -h, --help           output usage information
    -V, --version        output the version number
    -o, --output         convert output file. If empty, output filename will be replaced [target_file_body]_[ratio*10].js.
    -r, --ratio <ratio>  convert ratio. path caluculated by this rate. ( default 1 )
    -b, --base <base>    convert base ratio (default ratio 2)
```

##### <file>
変換対象のToolkit for CreateJSで書き出されたJSファイル。

##### [options]
出力ファイルや変換レートなどの実行時パラメータを渡せます。詳しくは`trconvert -h`としてヘルプを見てください。

### TODO
* ~~npm installに対応予定~~ done

### 参照
[https://github.com/ysugimoto/TFCRatioConverter](https://github.com/ysugimoto/TFCRatioConverter) 
こちらのロジックをベースに拡張しました。

### 注意
シェイプのコンパクト化すると、うまく動かない可能性があるので、パブリッシュ時にシェイプのコンパクト化のチェックを外すようにしてください。

###release
```
gulp tag --npm
```

### LICENSE
@see [LICENSE](https://github.com/atsumo/trconvert/blob/master/LICENSE)
MIT License.

[TFCRatioConverter](https://github.com/ysugimoto/TFCRatioConverter) included in this product is MIT License.
