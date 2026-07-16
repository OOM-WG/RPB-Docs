# [一键工具 ROOT 教程](https://root.oom-wg.dev/tutorial/root-device)

> 真我 GT & Neo 系列 root 教程











<Callout type="idea">
  若未解锁，请先按照

  [解锁教程](unlock)

  解锁！
</Callout>

## 准备工作 [#准备工作]

### 硬件准备 [#硬件准备]

解锁需要以下硬件支持:

* 支持数据传输的 USB 数据线（`C to A` 或 `C to C` 皆可，请按照自己的实际情况选择）
* 电脑（推荐使用 Windows 系统的电脑，本教程不适用于 Linux 或 MacOS 等系统）

<Callout type="idea">
  使用支持 OTG 的 Android 设备也可以刷机，但本教程不在此过多赘述！
</Callout>

<Callout type="warn">
  务必保证数据线与电脑的 USB 接口都可以正常传输数据！

  <>  </>

  使用低质数据线连接设备，会在进入 `BootLoader` 模式时电脑无法正确识别设备！
</Callout>

#### 开启 USB 调试 [#开启-usb-调试]



<DevMode opt="USB 调试" />

## 刷入 ROOT [#刷入-root]

### 通过 ShiroSU 在线 root [#通过-shirosu-在线-root]

[**ShiroSU NT**](https://shirosu.gal.tf/newtech) 是新一代 root 实现，
与其他多数 root 不同，它通过**网页管理 root**，同时也能通过**网页刷入 root**（支持 `fastboot` 刷机）

对于更多信息，参见 [**ShiroSU 官网**](https://shirosu.gal.tf/) 与 [**ShiroSU 文档**](https://oom-wg.dev/ssu)

### 使用一键工具 ROOT [#使用一键工具-root]

<Callout type="idea">
  请先提前下载好 ROOT 工具

  > ROOT 工具请[**加群获取**](/qq)，长期免费更新，加入后查看群公告即可

  部分重复操作无需重复执行！
</Callout>

打开下载好的 ROOT 工具并解压，得到一个文件夹后，进入该文件夹

<img alt="文件夹例图" src="__img0" />

然后通过鼠标 **`左键` 双击** 来打开 `双击打开工具箱.exe` 程序

<img alt="工具例图" src="__img1" />

<Callout type="idea">
  如果没有在资源管理器中打开&#x2A;*显示`文件拓展名`**，则不会有 `exe` 后缀，虽然不影响使用，但是建议打开！
</Callout>

<Callout>
  例图来自于有 

  `init_boot`

   分区机型的 ROOT 工具，与仅有 

  `boot`

   分区机型略有差异，但在本教程中不影响使用！
</Callout>

<Callout>
  如果电脑还未安装 Android 驱动，则需要执行以下操作:

  > 安装过则可以省略该步骤

  先输入 `1`(安装驱动) 并按 `回车键`，按照提示安装驱动，然后再返回工具箱主页

    <img alt="安装例图" src="__img2" />
</Callout>

<Callout type="warn">
  务必保证驱动正确安装！

  未安装驱动或未正确安装驱动，会在进入 `BootLoader` 模式时电脑无法正确识别设备！
</Callout>

使用数据线连接设备与电脑

<Callout type="idea">
  如果是在开机状态，需要注意以下几点:

  1. 如果是开启 `USB 调试` 后第一次连接电脑，会提示是否允许电脑进行 USB 调试，此时请勾选一律允许调试并确认
  2. 如果连接电脑后提示选择连接模式，请选择 `传输文件`（即 `MTP 模式`）

  如果是在关机状态，则需要同时长按 `音量-键` 与 `电源键` 以进入 `BootLoader` 模式
</Callout>

输入 `6`(刷入 ROOT) 并按 `回车键`，依照实际情况选择当前状态

输入当前状态对应的数字并按 `回车键` 后，会刷入 ROOT 并自动重启

<img alt="选择状态例图" src="__img3" />

重启后桌面新增一个 Android 原生图标的软件（即 ROOT 自带的默认管理器），则说明刷入成功

<Callout>
  如果已经提前安装好 ROOT 管理器，则不会再出现一个新的软件， 除非安装的 ROOT 管理器与当前刷入的 ROOT
  **不匹配**，此时仍需要再安装匹配的 ROOT 管理器
</Callout>

由于默认管理器会从 GitHub 下载完整版管理器，但是国内网络环境很难下载成功，
因此需要再使用工具箱安装 ROOT 管理器

返回工具箱主页后，输入 `3`(安装 ROOT 管理器) 并按 `回车键`

<Callout>
  设备重启后仍需要按先前教程所描述的办法来保证设备与电脑正常连接
</Callout>

<img alt="安装管理器例图" src="__img4" />

通过工具箱安装时，设备会提示安装 ROOT 管理器，确认安装即可

ROOT 管理器安装成功后，进入管理器，
若提示修复运行环境，则需要确认修复，在安装选项中选择 `直接安装` 并确认，
安装成功并重启后，便成功获取 ROOT 权限

> **至此，ROOT 完毕**
>
> 如果想要玩得更得心应手，参见 [玩机资源](/resources)

---

> [**Page Index**] <https://root.oom-wg.dev/llms.txt> | [**Full Content**] <https://root.oom-wg.dev/llms-full.txt>