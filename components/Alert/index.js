import cn from 'classnames'
import styles from './alert.module.scss'
// import './alert.scss'
export default function Alert({ children, type }) {
	return (
		<div
			className={cn({
				[styles.success]: type === 'success',
				[styles.error]: type === 'error'
			})}
		>
			{children}
			<div className="red">
				<div className="text">sssss</div>
			</div>
		</div>
	)
}
