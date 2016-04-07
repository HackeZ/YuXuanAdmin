/*
 * 配置项
 */

module.exports = {
	// session 设置
	session_secret: 'dnV0fiUef293kgfB5d69Dhawt33ejr7oE', // session 密钥(12345用于测试)
	session_name: 'YuXuanAdmin',
	session_failtime: 0. * 60 * 1000, // min * s * ms = 30 min

	// 数据库配置
	URL: '127.0.0.1:27017/YuXuanAdmin',
	DB_NAME: 'YuXuanAdmin',
	HOST: '',
	PORT: 27017,
	USERNAME: '',
	PASSWORD: '',

	// 站点基本配置

	// 本地缓存设置（Redis）
	redis_host: '127.0.0.1',
	redis_port: 6379,
	redis_pass: '',
	redis_db: 0, // 使用第0个数据库

	// 信息提示相关
    system_illegal_param : '非法参数',
    system_noPower : '对不起，您无权执行该操作！',
    system_atLeast_one : '请选择至少一项后再执行删除操作！',
    system_batch_delete_not_allowed : '对不起，该模块不允许批量删除！'
}
