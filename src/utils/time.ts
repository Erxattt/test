/**
 * 返回是上午还是中午还是晚上
 */
export const getNameByChTime = () => {
    const now = new Date();
    const hours = now.getHours();

    switch(true) {
        case (hours >= 0 && hours <= 5):
            return "凌晨";
        case (hours > 5 && hours <= 8):
            return "早晨";
        case (hours > 8 && hours <= 11):
            return "上午";
        case (hours > 11 && hours <= 13):
            return "中午";
        case (hours > 13 && hours <= 16):
            return "下午";
        case (hours > 16 && hours <= 19):
            return "傍晚";
        default:
            return "晚上";
    }
}
