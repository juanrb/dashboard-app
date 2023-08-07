'use client'

import { Box, Card, Grid, Stack, Typography } from '@mui/material'

import AuthLogin from '../auth/AuthLogin'
import Link from 'next/link'
import Logo from '@/app/(DashboardLayout)/layout/shared/logo/Logo'
// Components
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer'

// eslint-disable-next-line max-lines-per-function
const Login2 = () => (
	<PageContainer title="Login" description="this is Login page">
		<Box
			sx={{
				'&:before': {
					animation: 'gradient 15s ease infinite',
					background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
					backgroundSize: '400% 400%',
					content: '""',
					height: '100%',
					opacity: '0.3',
					position: 'absolute',
					width: '100%',
				},
				position: 'relative',
			}}
		>
			<Grid
				container
				spacing={0}
				justifyContent="center"
				sx={{ height: '100vh' }}
			>
				<Grid
					item
					xs={12}
					sm={12}
					lg={4}
					xl={3}
					display="flex"
					justifyContent="center"
					alignItems="center"
				>
					<Card
						elevation={9}
						sx={{
							maxWidth: '500px',
							p: 4,
							width: '100%',
							zIndex: 1,
						}}
					>
						<Box display="flex" alignItems="center" justifyContent="center">
							<Logo />
						</Box>
						<AuthLogin
							subtext={
								<Typography
									variant="subtitle1"
									textAlign="center"
									color="textSecondary"
									mb={1}
								>
									Your Social Campaigns
								</Typography>
							}
							subtitle={
								<Stack
									direction="row"
									spacing={1}
									justifyContent="center"
									mt={3}
								>
									<Typography
										color="textSecondary"
										variant="h6"
										fontWeight="500"
									>
										New to Modernize?
									</Typography>
									<Typography
										component={Link}
										href="/authentication/register"
										fontWeight="500"
										sx={{
											color: 'primary.main',
											textDecoration: 'none',
										}}
									>
										Create an account
									</Typography>
								</Stack>
							}
						/>
					</Card>
				</Grid>
			</Grid>
		</Box>
	</PageContainer>
)
export default Login2
