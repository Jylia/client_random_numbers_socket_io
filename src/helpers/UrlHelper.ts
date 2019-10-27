import { MenuItemsEnum } from "../enums/MenuItems";
import { UrlConstants } from "../constants/UrlConstants";

export class UrlHelper {
    public static getUrlByMenuItem(menuItem: MenuItemsEnum) {
        switch (menuItem) {
            case MenuItemsEnum.Home:
                return UrlConstants.home;
            case MenuItemsEnum.LineChart:
                return UrlConstants.lineChart;
            case MenuItemsEnum.BarChart:
                return UrlConstants.barChart;
            case MenuItemsEnum.TresholdPlay:
                return UrlConstants.tresholdPlay;
            default:
                return UrlConstants.home;
        }
    }

    public static getMenuItemByPathName(pathName: string) {
        switch (pathName) {
            case UrlConstants.home:
                return MenuItemsEnum.Home;
            case UrlConstants.lineChart:
                return MenuItemsEnum.LineChart;
            case UrlConstants.barChart:
                return MenuItemsEnum.BarChart;
            case UrlConstants.tresholdPlay:
                return MenuItemsEnum.TresholdPlay;
            default:
                return MenuItemsEnum.Home;
        }
    }
}