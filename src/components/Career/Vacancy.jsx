import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'

import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

const styles = (theme) => ({
	root: {
		marginTop: 70,
		padding: theme.spacing(2),
	},

	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
})

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant='h6'>{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label='close'
					className={classes.closeButton}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	)
})
const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent)
const DialogActions = withStyles((theme) => ({
	root: {
		color: theme.palette.grey[500],
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions)

const Vacancy = ({ data }) => {
	const [open, setOpen] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}
	let options = { month: 'long', year: 'numeric', day: 'numeric' }

	return (
		<div className='section section-padding-top'>
			<div className='vacancy-list'>
				<ol className='gradient-list'>
					<li>
						{data.title}
						<button
							type='button'
							className='detail-btn btn btn-primary btn-hover-secondary'
							// style={{ marginBottom: '1.5rem' }}
							// onClick={() => handleClickOpen(data.id)}
							onClick={handleClickOpen}
						>
							Details
						</button>
					</li>
				</ol>
				<Dialog
					className='dialog-content'
					// style={titleStyle}
					// onClose={handleClose}
					aria-labelledby='customized-dialog-title'
					open={open}
				>
					<DialogTitle id='customized-dialog-title'>
						{data.title}
					</DialogTitle>
					<DialogContent >
						<div key={data.id}>
							{/* <ul className='collapsed-text'>
								<li>{data.work_time}</li>
								<li>{data.position}</li>
							</ul> */}
							<div className='color-style'>
								<b>Description:</b>
								<div
									dangerouslySetInnerHTML={{ __html: data['description'] }}
								></div>
							</div>
							<div className='color-style'>
								<b>Responsibilities:</b>
								<div
									dangerouslySetInnerHTML={{ __html: data['responsibilites'] }}
								></div>
							</div>
							<li className='color-style'>
								<b>Salary:</b> {data.salary_range}
							</li>
							<li className='color-style'>
								<b>Deadline:</b>
								{'  '}
								{new Date(data.due_date).toLocaleDateString('en-US', options)}
							</li>
						</div>
					</DialogContent>
					<DialogActions>
						<button className='close-btn btn btn-danger' onClick={handleClose} >
							Close
						</button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	)
}
Vacancy.propTypes = {
	data: PropTypes.object,
}

export default Vacancy
