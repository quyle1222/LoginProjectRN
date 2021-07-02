import detailStyle from './container/Details'
import loginStyle from './container/Login'

export default function ({ Colors, ...args }) {
  return {
    details: detailStyle({ Colors, ...args }),
    login: loginStyle({ Colors, ...args }),
  }
}
