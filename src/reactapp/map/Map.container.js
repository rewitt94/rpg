import { connect } from 'react-redux';
import { Map } from './Map';
import { scrollMap } from './Map.actions'

const mapStateToProps = state => {
  return {
    xOffset: state.map.xOffset,
    yOffset: state.map.yOffset
  }
}

const mapDispatchToProps = dispatch => {
  return {
    scrollMap:(key) => dispatch(scrollMap(key))
  }
}

export const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)
