import React from 'react';
import Card from './Card';
import './GroupGrid.css';

const GroupGrid = () => {
  // 示例数据
  const groups = [
    {
      title: '刷题招工',
      postTime: '2023-06-15',
      duration: '3 months',
      topic: '技术',
    },
    {
      title: '兴趣爱好小组',
      postTime: '2023-06-10',
      duration: '6 weeks',
      topic: '兴趣爱好',
    },
    {
      title: '英语学习讨论',
      postTime: '2023-06-12',
      duration: '2 months',
      topic: '语言学习',
    },
    {
      title: '音乐分享交流',
      postTime: '2023-06-08',
      duration: '4 weeks',
      topic: '音乐',
    },
    {
      title: '编程挑战小组',
      postTime: '2023-06-14',
      duration: '1 month',
      topic: '技术',
    },
    {
      title: '读书讨论会',
      postTime: '2023-06-11',
      duration: '6 weeks',
      topic: '文学',
    },
    {
      title: '音乐分享交流',
      postTime: '2023-06-08',
      duration: '4 weeks',
      topic: '音乐',
    },
    {
      title: '编程挑战小组',
      postTime: '2023-06-14',
      duration: '1 month',
      topic: '技术',
    },
    {
      title: '读书讨论会',
      postTime: '2023-06-11',
      duration: '6 weeks',
      topic: '文学',
    },
    {
      title: '音乐分享交流',
      postTime: '2023-06-08',
      duration: '4 weeks',
      topic: '音乐',
    },
    {
      title: '编程挑战小组',
      postTime: '2023-06-14',
      duration: '1 month',
      topic: '技术',
    },
    {
      title: '读书讨论会',
      postTime: '2023-06-11',
      duration: '6 weeks',
      topic: '文学',
    }
  ];

  return (
    <div className="group-grid">
      {groups.map((group, index) => (
        <Card key={index} group={group} />
      ))}
    </div>
  );
};

export default GroupGrid;