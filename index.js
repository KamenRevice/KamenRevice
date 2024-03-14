const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar =
      '█'.repeat(passedProgressBarIndex) +
      '▁'.repeat(progressBarCapacity - passedProgressBarIndex)
    return `{ ${progressBar} }`
}

const readme = `\
### Hi there 👋

⏳ Year progress ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} %

---

⏰ Updated on ${new Date().toUTCString()}

---

🦕🦕🦕 There will be a 🐍 animation below, if it doesn't show up, check for scientific internet access.
🐍🐍🐍 下面会有一个贪吃蛇🐍的动画，如果没有显示，请检查是否科学上网。

![🐍🐍🐍](https://raw.githubusercontent.com/KamenRevice/KamenRevice/output/github-contribution-grid-snake.svg)

[![Progress Bar & Snake](https://github.com/KamenRevice/KamenRevice/actions/workflows/main.yml/badge.svg)](https://github.com/KamenRevice/KamenRevice/actions/workflows/main.yml)\
`

console.log(readme)
