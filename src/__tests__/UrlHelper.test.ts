import { UrlHelper } from "../helpers/UrlHelper";
import { MenuItemsEnum } from "../enums/MenuItems";
import { UrlConstants } from "../constants/UrlConstants";

test('return url by menu item', () => {
    expect(UrlHelper.getUrlByMenuItem(MenuItemsEnum.Home)).toBe(UrlConstants.home);
    expect(UrlHelper.getUrlByMenuItem(MenuItemsEnum.LineChart)).toBe(UrlConstants.lineChart);
    expect(UrlHelper.getUrlByMenuItem(MenuItemsEnum.BarChart)).toBe(UrlConstants.barChart);
    expect(UrlHelper.getUrlByMenuItem(MenuItemsEnum.TresholdPlay)).toBe(UrlConstants.tresholdPlay);
});

test('return menu item by path name', () => {
    expect(UrlHelper.getMenuItemByPathName(UrlConstants.home)).toBe(MenuItemsEnum.Home);
    expect(UrlHelper.getMenuItemByPathName(UrlConstants.lineChart)).toBe(MenuItemsEnum.LineChart);
    expect(UrlHelper.getMenuItemByPathName(UrlConstants.barChart)).toBe(MenuItemsEnum.BarChart);
    expect(UrlHelper.getMenuItemByPathName(UrlConstants.tresholdPlay)).toBe(MenuItemsEnum.TresholdPlay);
});