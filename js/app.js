
// Select Elements
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const jobsText = document.getElementById("jobs-count-text");
const emptyState = document.getElementById("empty-state");

const allTab = document.getElementById("all-tab");
const interviewTab = document.getElementById("interview-tab");
const rejectedTab = document.getElementById("rejected-tab");

const tabs = document.querySelectorAll(".tab-btn");

let currentFilter = "all";

// Set Active Tab
function setActiveTab(tab) {
  tabs.forEach((t) => t.classList.remove("active"));
  tab.classList.add("active");
}


// Update Dashboard
function updateDashboard() {
  const cards = document.querySelectorAll(".job-card");

  let interview = 0;
  let rejected = 0;

  cards.forEach((card) => {
    if (card.dataset.status === "interview") interview++;
    if (card.dataset.status === "rejected") rejected++;
  });

  totalCount.textContent = cards.length;
  interviewCount.textContent = interview;
  rejectedCount.textContent = rejected;
}

// Filter Jobs
function filterJobs(status, tabElement) {
  currentFilter = status;
  setActiveTab(tabElement);

  const cards = document.querySelectorAll(".job-card");
  let visibleCount = 0;

  cards.forEach((card) => {
    if (status === "all") {
      card.style.display = "block";
      visibleCount++;
    } else if (card.dataset.status === status) {
      card.style.display = "block";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (visibleCount === 0) {
    emptyState.classList.remove("hidden");
    jobsText.textContent = "0 Jobs";
  } else {
    emptyState.classList.add("hidden");

    if (status === "all") {
      jobsText.textContent = `${visibleCount} Jobs`;
    } else {
      jobsText.textContent = `${visibleCount} of ${totalCount.textContent} Jobs`;
    }
  }
}

// Change Status
function changeStatus(card, newStatus) {
  const badge = card.querySelector(".status-badge");

  if (card.dataset.status === newStatus) {
    card.dataset.status = "";
    badge.textContent = "Not Applied";
    badge.className = "status-badge";
  } else {
    card.dataset.status = newStatus;

    if (newStatus === "interview") {
      badge.textContent = "Interview";
      badge.className = "status-badge badge-interview";
    } else {
      badge.textContent = "Rejected";
      badge.className = "status-badge badge-rejected";
    }
  }

  updateDashboard();
  filterJobs(currentFilter, document.querySelector(".tab-btn.active"));
}

// Setup Cards
function setupCard(card) {
  const interviewBtn = card.querySelector(".interview-btn");
  const rejectedBtn = card.querySelector(".rejected-btn");
  const deleteBtn = card.querySelector(".delete-btn");

  card.dataset.status = "";

  interviewBtn.addEventListener("click", () => changeStatus(card, "interview"));

  rejectedBtn.addEventListener("click", () => changeStatus(card, "rejected"));

  deleteBtn.addEventListener("click", () => {
    card.remove();
    updateDashboard();
    filterJobs(currentFilter, document.querySelector(".tab-btn.active"));
  });
}

// Initialize
document.querySelectorAll(".job-card").forEach(setupCard);
allTab.addEventListener("click", () => filterJobs("all", allTab));
interviewTab.addEventListener("click", () =>
  filterJobs("interview", interviewTab),
);
rejectedTab.addEventListener("click", () =>
  filterJobs("rejected", rejectedTab),
);

updateDashboard();
filterJobs("all", allTab);
