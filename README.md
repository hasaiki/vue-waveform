# Usage


### install

* npm -i vue-waveform


* import {waveform} from 'vue-waveform' 
* Vue.use(waveform)


### Instructions

#### scene
websocket arraybuffer file mp3 aac blob arraybuffer

#### Components
 
#####  vue-waveform
```
<vue-waveform ref="mycom" :range="0.6" :WIDTH="800" :HEIGHT="100" websocketURL="ws://192.168.6.48:8082/ws/websocket/socketServer.do" :id="selectid" :arraybuffer="arraybuffer"></vue-waveform> 
```

![效果](https://github.com/chenqiaoen521/vue-waveform/blob/master/example.png)

![效果2](https://github.com/chenqiaoen521/vue-waveform/blob/master/ex2.png)

##### props
|  attr  |  type | default |  description |
|  ----  | ----  |  ----   |  ----       |
| WIDTH  | Number | 500 |  The canvas WIDTH  |
| HEIGHT  | Number | 300 |  The canvas HEIGHT |
| websocketURL  | String | '' |  websocket url example 'ws://192.168.1.1:8082' |
| id  | String | '' |  device id |
| type  | String | 'bar' |  'bar' : bar graph  , 'line' : line  graph |
| range  | Number | 1 |  axisY Ratio of Canvas height |
| arraybuffer | ArrayBuffer | null |  websocket Receive Byte array |
| bgColor | string | 'rgb(0, 0, 0)' |  canvas background color , rgb or Hex color code |

##### method：
|  name  |  return type | parameter |  description |
|  ----  | ----  |  ----   |  ----       |
| openWS  | void |  |  open websocket  |
| play  | void |  |  play audio |
| pause  | void |  |  pause audio |
| stop  | void |  |  close websocket and pause audio |

example： 
```
this.$refs.mycom.openWS()
```


#### scene
### audioplayer
##### audioUI：
![效果3](https://github.com/chenqiaoen521/vue-waveform/blob/master/ex3.png)
##### timelineUI:
![效果3](https://github.com/chenqiaoen521/vue-waveform/blob/master/ex4.png)

```
import {waveform} from 'vue-waveform'
import 'vue-waveform/dist/static/css/app.css'

<vue-waveplayer @ready=ready :range="0.3" ref="mycom" :WIDTH="800" :HEIGHT="100" bgColor="#fff" :URL="URL"></vue-waveplayer>

```
##### props ：
* WIDTH  宽度 
* HEIGHT  高度
* range 高度显示的比率
* bgColor 波形图背景色
* playType 1.是audio标签 2.是 时间轴
* URL 播放文件地址

##### method 方法：
* stop  参数 无
* seekTo 参数 毫秒
```
mounted() {
  this.URL = './static/3.aac'
},
  methods: {
    click() {
      this.$refs.mycom.seekTo(this.timeline)
    },
    ready() {
      this.$refs.mycom.seekTo(this.timeline)
    }
  }

```