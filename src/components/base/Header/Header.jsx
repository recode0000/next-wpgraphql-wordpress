import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
      <header>
        <div>
          <h1>
            <Link href="/">HOME</Link>
          </h1>
        </div>
      </header>
  )
}

export default Header