export const RESET = "RESET"; //初始化reducer 目前只初始化marketReducer
// Login
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

// Nav
export const PAGE_PUSH_REQUEST = "PAGE_PUSH_REQUEST";
export const PAGE_PUSH_SUCCESS = "PAGE_PUSH_SUCCESS";
export const PAGE_PUSH_FINISH = "PAGE_PUSH_FINISH";

// 页面推送
export const PUSH_PAGE = "PUSH_PAGE";
export const REPLACE_PAGE = "REPLACE_PAGE";

export const NAV_RESET_ROUTE = "NAV_RESET_ROUTE";
export const NAV_RESET_MAIN = "NAV_RESET_MAIN";

// TAB 操作模态窗 开启
export const TAB_MODAL_OPEN_START = "TAB_MODAL_OPEN_START";
export const TAB_MODAL_OPEN_DONE = "TAB_MODAL_OPEN_DONE";
// TAB 操作模态窗 关闭
export const TAB_MODAL_CLOSE_START = "TAB_MODAL_CLOSE_START";
export const TAB_MODAL_CLOSE_DONE = "TAB_MODAL_CLOSE_DONE";

// 重置语言
export const RESET_LANGUAGE_REQUEST = "RESET_LANGUAGE_REQUEST";
export const RESET_LANGUAGE_SUCCESS = "RESET_LANGUAGE_SUCCESS";
export const RESET_LANGUAGE_FAILURE = "RESET_LANGUAGE_FAILURE";

// 语言模态窗开启
export const LANGUAGE_MODAL_OPEN_START = "LANGUAGE_MODAL_OPEN_START";
export const LANGUAGE_MODAL_OPEN_DONE = "LANGUAGE_MODAL_OPEN_DONE";
// 语言模态窗关闭
export const LANGUAGE_MODAL_CLOSE_START = "LANGUAGE_MODAL_CLOSE_START";
export const LANGUAGE_MODAL_CLOSE_DONE = "LANGUAGE_MODAL_CLOSE_DONE";

// 提示框
export const TOAST_SHOW = "TOAST_SHOW";
export const TOAST_HIDE = "TOAST_HIDE";

// 提示
export const SPIN_SHOW = "SPIN_SHOW";
export const SPIN_HIDE = "SPIN_HIDE";

// 新建书卡
export const UPDATE_PARAMS = "UPDATE_PARAMS";
export const UPDATE_PARAMS_REQUEST = "UPDATE_PARAMS_REQUEST";
export const UPDATE_PARAMS_SUCCESS = "UPDATE_PARAMS_SUCCESS";
export const UPDATE_PARAMS_FAILURE = "UPDATE_PARAMS_FAILURE";
// 重置字段
export const RESET_PARAMS = "RESET_PARAMS";
// 更新 封面
export const UPDATE_PARAMS_BOOK_THUMBNAIL = "UPDATE_PARAMS_BOOK_THUMBNAIL";
// 更新 书名
export const UPDATE_PARAMS_BOOK_NAME = "UPDATE_PARAMS_BOOK_NAME";
// 更新 ISBN
export const UPDATE_PARAMS_ISBN = "UPDATE_PARAMS_ISBN";
// 更新 分类
export const UPDATE_PARAMS_CATEGORY = "UPDATE_PARAMS_CATEGORY";
// 更新 出版社
export const UPDATE_PARAMS_HOUSE = "UPDATE_PARAMS_HOUSE";
// 更新 国家
export const UPDATE_PARAMS_COUNTRY = "UPDATE_PARAMS_COUNTRY";
// 更新 语言
export const UPDATE_PARAMS_BOOK_LANGUAGE = "UPDATE_PARAMS_BOOK_LANGUAGE";
// 更新 作品简介
export const UPDATE_PARAMS_SUMMARY = "UPDATE_PARAMS_SUMMARY";
// 更新 出版时间
export const UPDATE_PARAMS_PUBLISH_DATE = "UPDATE_PARAMS_PUBLISH_DATE";
// 更新 作者
export const UPDATE_PARAMS_AUTHOR = "UPDATE_PARAMS_AUTHOR";
export const UPDATE_PARAMS_AUTHOR_INTRO = "UPDATE_PARAMS_AUTHOR_INTRO";
// 更新 目录
export const UPDATE_PARAMS_CATALOG = "UPDATE_PARAMS_CATALOG";
// 更新 获奖记录
export const UPDATE_PARAMS_AWARDS = "UPDATE_PARAMS_AWARDS";
// 更新 样章上传
export const UPDATE_PARAMS_UPLOAD_CHAPTER = "UPDATE_PARAMS_UPLOAD_CHAPTER";
// 更新书卡
export const UPDATE_BOOKCARD = "UPDATE_BOOKCARD";
export const UPDATE_BOOKCARD_ID = "UPDATE_BOOKCARD_ID";

// 新建活动
export const UPDATE_ACTIVITY = "UPDATE_ACTIVITY";
export const UPDATE_ACTIVITY_REQUEST = "UPDATE_ACTIVITY_REQUEST";
export const UPDATE_ACTIVITY_SUCCESS = "UPDATE_ACTIVITY_SUCCESS";
export const UPDATE_ACTIVITY_FAILURE = "UPDATE_ACTIVITY_FAILURE";

// 更新意向标题
export const UPDATE_INTENTIONS_NAME = "UPDATE_INTENTIONS_NAME";
// 更新 意向国家
export const UPDATE_INTENTIONS_COUNTRY = "UPDATE_INTENTIONS_COUNTRY";
// 更新 意向语言
export const UPDATE_INTENTIONS_LANGUAGE = "UPDATE_INTENTIONS_LANGUAGE";
// 更新 意向分类
export const UPDATE_INTENTIONS_CATEGORY = "UPDATE_INTENTIONS_CATEGORY";
export const UPDATE_INTENTION = "UPDATE_INTENTION";
// 重置意向
export const RESET_INTENTIONS_PARAMS = "RESET_INTENTIONS_PARAMS";
// add添加一条意向
export const ADD_INTENTION = "ADD_INTENTION";
// add删除一条意向
export const DELETE_INTENTION = "ADD_INTENTION";
//更新一条意向dao list
export const UPDATE_INTENTION_TO_LIST = "UPDATE_INTENTION_TO_LIST";
// 更新列表
export const UPDATE_INTENTIONS_LIST = "UPDATE_INTENTIONS_LIST";
// 新建 ActionSheet
export const CAMERA_ACTION_SHEET_SHOW = "CAMERA_ACTION_SHEET_SHOW";
export const CAMERA_ACTION_SHEET_HIDE = "CAMERA_ACTION_SHEET_HIDE";
// 新建 相机
export const CAMERA_MODAL_SHOW = "CAMERA_MODAL_SHOW";
export const CAMERA_MODAL_HIDE = "CAMERA_MODAL_HIDE";

// 新建 扫码
export const SCAN_MODAL_SHOW = "SCAN_MODAL_SHOW";
export const SCAN_MODAL_HIDE = "SCAN_MODAL_HIDE";

// Sign
export const CHANGE_COUNTRY_CODE = "CHANGE_COUNTRY_CODE";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

// Me

export const UPDATE_ME_AVATAR_URL = "UPDATE_ME_AVATAR_URL";
export const UPDATE_NICKNAME = "UPDATE_NICKNAME";
export const UPDATE_JOB = "UPDATE_JOB";
export const UPDATE_INFO = "UPDATE_INFO";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_PUBLISH = "UPDATE_PUBLISH";

export const ME_LOADING = "BOOKCARD_LOADFING";
export const BOOKCARDS_SUCCESS = "BOOKCARDS_SUCCESS";
export const BOOKCARD_DELETE_SUCCESS = "BOOKCARD_DELETE_REQUEST";
export const INTENTION_DELETE_SUCCESS = "INTENTION_DELETE_SUCCESS";
export const DELEVRY_STATUS = "DELEVRY_STATUS"; //投递状态

export const ME_COLLECT_BOOKCARDS = "ME_COLLECT_BOOKCARDS";
export const CANCLE_COLLECT_BOOKCARD = "CANCLE_COLLECT_BOOKCARD";
export const ME_RESET_INFO = "ME_RESET_INFO"; //重置个人信息

// house
//设置loading状态
export const HOUSE_SET_LOADING = "HOUSE_SET_LOADING";
export const HOUSE_PUBLISH_INFO = "HOUSE_PUBLISH_INFO";
export const HOUSE_PUBLISH_MEMBERS = "HOUSE_PUBLISH_MEMBERS";
export const HOUSE_PUBLISH_BOOKCARDS = "HOUSE_PUBLISH_BOOKCARDS";
export const HOUSE_PUBLISH_FOLLOW = "HOUSE_PUBLISH_FOLLOW";
export const RESET_HOUSE_INFO = "RESET_HOUSE_INFO"; //重置house信息

//bookcard
export const BOOKCARD_INFO = "BOOKCARD_INFO";
export const BOOKCARD_FOLLOW = "BOOKCARD_FOLLOW";
export const RESET_BOOKCARD_INFO = "RESET_BOOKCARD_INFO";

//publisher
export const PUBLISHER_ACCOUNT_INFO = "PUBLISHER_ACCOUNT_INFO";
export const PUBLISHER_ACCOUNT_BOOKCARDS = "PUBLISHER_ACCOUNT_BOOKCARDS";
export const PUBLISHER_ACCOUNT_TRENDS = "PUBLISHER_ACCOUNT_TRENDS";
export const PUBLISHER_ACCOUNT_FOLLOW = "PUBLISHER_ACCOUNT_FOLLOW";

// im
export const IM_UN_READ_CONVERSATIONS = "IM_UN_READ_CONVERSATIONS"; //未读消息
export const IM_SET_CHATS = "IM_SET_CHATS"; //获取聊天

// 创建IM
export const IM_CLIENT_CREATE_REQUEST = "IM_CLIENT_CREATE_REQUEST";
export const IM_CLIENT_CREATE_SUCCESS = "IM_CLIENT_CREATE_SUCCESS";
export const IM_CLIENT_CREATE_FAILURE = "IM_CLIENT_CREATE_FAILURE";
export const IM_SET_CONTACTS = "IM_SET_CONTACTS";
export const IM_ADD_CONTACTS = "IM_ADD_CONTACTS";
export const IM_SET_COUNT = "IM_SET_COUNT";
export const IM_FRIENDS_SET__COUNT = "IM_FRIENDS_SET__COUNT";
export const IM_DELIVERY_SET_COUNT = "IM_DELIVERY_SET_COUNT";
// 更新聊天列表
export const IM_UPDATE_CHAT_LIST = "IM_UPDATE_CHAT_LIST";

// circle
export const CIRCLE_IS_FRIEND_REFRESH_LIST = "CIRCLE_IS_FRIEND_REFRESH_LIST"; //出版圈是否刷新list
export const CIRCLE_IS_EXPORE_REFRESH_LIST = "CIRCLE_IS_EXPORE_REFRESH_LIST"; //出版圈是否刷新list
export const CIRCLE_UPDATE_DATA = "CIRCLE_UPDATE_DATA";

export const MARKET_IS_EEFRESH = "MARKET_IS_EEFRESH"; //market是否刷新
export const PUB_CHAT_IS_EEFRESH = "PUB_CHAT_IS_EEFRESH"; //pubChat是否刷新
export const Message_Friends_IS_EEFRESH = "Message_Friends_IS_EEFRESH"; // Message Friends 是否刷新
export const MARKET_UPDATE_CATEGORY = "MARKET_UPDATE_CATEGORY"; //market 更新分类
