var ENV = {
  Version: '1.0.0',
  isKf: true,
  preName: 'sqdcj', // sqdcj zsygx
  Title: '共销客',
  Logo: 'data/images/logo.png',
  Fid: 10,
  AdminApi: 'https://admin.bsa.cn',
  GxkApi: 'https://laravel.boka.cn',
  WebHost: 'bsa.cn',
  AdminLogin: 'http://laravelcms.boka.cn/admin/login/login?role=wesite',
  TestApp: true,
  AppId: '',
  GhId: 'gh_dc6e3c73bc4c'
}

ENV.NoAccessUrls = [
  ENV.GxkApi + '/api/factory/webApply'
]
