import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'


export const globalStyles = StyleSheet.create({
  titleWhiteSemiBold: {
    fontWeight: '800',
    fontSize: RFValue(17),
    color: '#fff',
  },
  titleSemiBold: {
    fontWeight: '800',
    fontSize: RFValue(17),
  },
  titleWhiteLight: {
    fontWeight: '400',
    fontSize: RFValue(17),
    color: '#fff',
  },
  rowColumn: {
    display: 'flex',
    flexDirection: 'row',
  },
  ml_1: {
    marginLeft: '2%'
  },
  justifyContent: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  ml_2: {
    marginLeft: '3%'
  },
  ml_3: {
    marginLeft: '6%'
  },
  ml_4: {
    marginLeft: '8%'
  },
  mr_1: {
    marginRight: '2%'
  },
  mr_2: {
    marginRight: '3%'
  },
  mr_3: {
    marginRight: '6%'
  },
  mr_4: {
    marginRight: '8%'
  },
  mt_1: {
    marginTop: '2%'
  },
  mt_2: {
    marginTop: '3%'
  },
  mt_3: {
    marginTop: '6%'
  },
  mt_4: {
    marginTop: '9%'
  },
  mt_5: {
    marginTop: '12%'
  },
  mb_1: {
    marginBottom: '2%'
  },
  mb_2: {
    marginBottom: '3%'
  },
  mb_3: {
    marginBottom: '6%'
  },
  mb_4: {
    marginBottom: '9%'
  },
  mb_5: {
    marginBottom: '12%'
  },

  pl_1: {
    paddingLeft: '2%'
  },
  ml_2: {
    paddingLeft: '3%'
  },
  pl_3: {
    paddingLeft: '6%'
  },
  pl_4: {
    paddingLeft: '8%'
  },
  pr_1: {
    paddingRight: '2%'
  },
  pr_2: {
    paddingRight: '3%'
  },
  pr_3: {
    paddingRight: '6%'
  },
  pr_4: {
    paddingRight: '8%'
  },
  pt_1: {
    paddingTop: '2%'
  },
  pt_2: {
    paddingTop: '3%'
  },
  pt_3: {
    paddingTop: '6%'
  },
  pt_4: {
    paddingTop: '9%'
  },
  pt_5: {
    paddingTop: '12%'
  },
})