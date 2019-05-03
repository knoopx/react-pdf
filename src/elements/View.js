import Base from './Base';

class View extends Base {
  static defaultProps = {
    wrap: true,
  };

  get name() {
    return 'View';
  }

  async render() {
    this.root.instance.save();
    this.applyTransformations();
    this.drawBackgroundColor();
    this.drawBorders();
    if (this.props.onRender) {
      this.props.onRender(this);
    }
    await this.renderChildren();
    if (this.props.debug) this.debug();
    this.root.instance.restore();
  }
}

export default View;
