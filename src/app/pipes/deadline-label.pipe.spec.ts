import { DeadlineLabelPipe } from './deadline-label.pipe';

describe('DeadlineLabelPipe', () => {
  it('create an instance', () => {
    const pipe = new DeadlineLabelPipe();
    expect(pipe).toBeTruthy();
  });
});
