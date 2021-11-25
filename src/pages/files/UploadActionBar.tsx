import { Button, Typography } from '@material-ui/core'
import { Clear } from '@material-ui/icons'
import { ReactElement } from 'react'
import { Check, Layers, PlusSquare, RefreshCcw } from 'react-feather'
import ExpandableListItemActions from '../../components/ExpandableListItemActions'
import { SwarmButton } from '../../components/SwarmButton'

interface Props {
  canSelectStamp: boolean
  hasSelectedStamp: boolean
  onUpload: () => void
  onBuy: () => void
  onSelect: () => void
  onCancel: () => void
  onClearStamp: () => void
  isUploading: boolean
}

export function UploadActionBar({
  canSelectStamp,
  hasSelectedStamp,
  onUpload,
  onBuy,
  onSelect,
  onCancel,
  onClearStamp,
  isUploading,
}: Props): ReactElement {
  const showBuy = !hasSelectedStamp
  const showSelect = canSelectStamp && !hasSelectedStamp
  const showUpload = hasSelectedStamp
  const showChange = canSelectStamp && hasSelectedStamp

  return (
    <>
      <ExpandableListItemActions>
        {showBuy ? (
          <SwarmButton onClick={onBuy} iconType={PlusSquare}>
            Buy New Postage Stamp
          </SwarmButton>
        ) : null}
        {showSelect ? (
          <SwarmButton onClick={onSelect} iconType={Layers}>
            Use Existing Postage Stamp
          </SwarmButton>
        ) : null}
        {showUpload ? (
          <SwarmButton onClick={onUpload} iconType={Check} disabled={isUploading} loading={isUploading}>
            Upload To Your Node
          </SwarmButton>
        ) : null}
        {showChange ? (
          <SwarmButton onClick={onClearStamp} iconType={RefreshCcw} disabled={isUploading}>
            Change Postage Stamp
          </SwarmButton>
        ) : null}
        <Button onClick={onCancel} variant="contained" startIcon={<Clear />}>
          Cancel
        </Button>
      </ExpandableListItemActions>
      {showSelect ? (
        <Typography>
          You need a postage stamp to upload. Please refer to the official Bee documentation to understand how postage
          stamps work.
        </Typography>
      ) : null}
    </>
  )
}