export default {
  send: {
    'prompt1': '将文字、文件拖、粘贴到此处，或 ',
    'prompt2': '天数<7或限制次数（24h后删除）',
    'prompt3':'请输入您要寄出的文本',
    'share':'分享',
    'textShare':'文本分享',
    'clickUpload': '点击上传',
    'pleaseInputExpireValue': '请输入有效期',
    'expireStyle': '过期方式',
    'expireData':{
      'day': '天数',
      'hour': '小时',
      'forever': '永久',
      'minute': '分钟',
      'count': '次数'
    },
    'expireValue':{
      'day': '天',
      'hour': '时',
      'minute': '分',
      'count': '次'
    },
    'fileType':{
      'file': '文件',
      'text': '文本'
    }
  },
  fileBox: {
    copySuccess: '复制成功',
    inputNotEmpty: '请输入五位取件码',
    fileBox: '文件箱',
    textDetail: '文本详情',
    copy: '复 制',
    close: '关 闭',
    delete: '删 除',
    download: '点 击 下 载',
    detail: '查 看 详 情',
    copyLink: '复制链接',
  },
  admin:{
    about:{
      'source1':'本项目开源于Github：',
      'source2':'FileCodeBox'
    },
    settings: {
      name: '网站名称',
      description: '网站描述',
      keywords: '关键词',
      background: '背景图片',
      admin_token: '管理密码',
      uploadSize: '文件大小',
      uploadSizeNote: '最大文件大小，单位:（bit),1mb=1 * 1024 * 1024',
      openUpload: {
        'title': '开启上传',
        'open': '开启游客上传',
        'close': '关闭游客上传',
        'note': '关闭之后需要登录后台方可上传',
      },
      file_storage: {
        'title': '存储引擎',
        'local': '本地存储',
        's3': 'S3存储',
        'note': '更新后需要重启FileCodeBox',
      },
      mei: '每',
      minute: '分钟',
      upload: '上传',
      files: '个文件',
      allow: '允许',
      errors: '次错误',
      save: '保存',
      saveSuccess: '保存成功',
    },
    fileView: {
      code: '取件码',
      prefix: '文件前缀',
      suffix: '文件后缀',
      text: '文本',
      used_count: '已使用次数',
      expired_count: '可用次数',
      size: '文件大小',
      expired_at: '过期时间',
      file_path: '文件路径',
      action: '操作',
      delete: '删除',
    },
    'menu': {
      'fileManage': '文件管理',
      'systemSetting': '系统设置',
      'about': '关于我们',
      'color': '颜色模式',
      'signout': '退出登录',
    },
    login: {
      'managePassword': '管理密码',
      'passwordNotEmpty': '密码不能为空',
      'login': '登 录',
      'loginSuccess': '登录成功',
      'loginError': '登录失败',
    }
  }
}